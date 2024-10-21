require 'sqlite3'

# модуль для работы с базой
module DB_app
  
  def connect()
    SQLite3::Database.new('db/storage.sqlite3')
  end
  
  private

  def create_table()
    connect().execute("create table if not exists 
      json_table (id integer primary key,
      speed real,
      runtime date,
      direction text,
      random_data integer,      
      current_time_int integer  
      );")
    connect().close
  end

  def insert_into(hash)
    
    #создает массив из всех value хеша,
    #добавляет в конц массива timestamp 
    arr_values = hash.inject([]) {|arr, (k, v)| arr << v} << Time.now.to_i
    
    self.connect.execute("insert into json_table 
      (speed, runtime, direction, random_data, current_time_int)
      values
      (?, ?, ?, ?, ?);",
      arr_values)
    connect().close
  end

  def select_data()
    self.connect.execute("select * from json_table")  
  end

end

