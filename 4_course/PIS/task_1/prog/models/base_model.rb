require 'bundler/setup'
require "sqlite3"
require_relative "../db/config_base_module.rb"
require_relative "show_details.rb"

module DB
  class << self
    def connect
      db = SQLite3::Database.new(DB_module.path_db)
      db.results_as_hash = true
      return db
    end
  end
end

module BaseModel
  @@connect = DB.connect

  include ShowDetails

  def test_
    show_post
  end

  private

  def instance_var
    list_instance_var = {}
    self.instance_variables.each do |var|
      list_instance_var[var.to_s] = self.instance_variable_get(var) 
    end
    return list_instance_var.except('@table')
  end

  def new_id_for_instance
    last_id = @@connect.execute("select id from #{self.table} order by id desc limit 1")
    id = last_id.empty? ? 1 : last_id[0]["id"] + 1
    self.instance_variable_set("@id", id)
    
    return id    
  end

  public

  def build
    columns_info = @@connect.execute("PRAGMA table_info(#{self.table})")      
    columns_info.each do |h|      
      self.instance_variable_set("@#{h['name']}", nil)
    end    
    return self
  end

  def sql_execute(str)
    #str = str.gsub(/from [a-z|A-Z|_]*\b/, "from #{self.table}")
    result = @@connect.execute(str)
    return result   
  end  

  def all    
    result = @@connect.execute("select * from #{self.table}")    
    show_all(result)
    return result
  end

  def find_by_id(id)
    result = @@connect.execute("select * from #{self.table} where id = #{id}")
  
    if !result.empty? then
      result[0].each do |k, v|
        self.instance_variable_set("@#{k}", v)
      end

      show_all(result)
      return self
    else
      puts('not find')
      retunr nil
    end   
    
  end

  def create

    names_columns = []
    count_columns = ''
    values = []            
    instances = instance_var 
    instances["@id"] ||= new_id_for_instance
    id = instances['@id']

    instances.each do |k, v|
      names_columns << k[1..-1]
      values << v
      count_columns = count_columns + '?, '
    end
    
    #puts(instances.inspect)

    result = @@connect.execute("INSERT INTO #{self.table} (#{names_columns.join(',')}) VALUES (#{count_columns[0..-3]})", values)
    #result = self.find_by_id(id)
    show_post
    return result


  end  

  def update
    names_columns = []
    count_columns = ''
    values = []
    id = instance_var['@id'] 
        
    instance_var.except('@id').each do |k, v|
      names_columns << k[1..-1] + ' = ?'
      values << v
    end
    
    result = @@connect.execute("UPDATE #{self.table} set #{names_columns.join(',')} where id = ? ", values << id)
    result = self.find_by_id(id)    

    show_post
    return result

    #puts @@connect.execute("PRAGMA table_info(test_table)")
  end

  def destroy
    id = self.id
    @@connect.execute("DELETE from #{self.table} where id = #{self.id}")

    puts("data deleted id=#{id}".colorize(:green))
  end
end
