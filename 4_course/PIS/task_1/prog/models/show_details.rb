require "colorize"

module ShowDetails
=begin
  def post(params)
    puts("HTTP POST: #{self}-model => #{params.inspect}")
    #return params.merge(id: rand(100))
  end

  def patch(id, params)
    puts("HTTP PATCH: #{self}-id = #{id} => #{params.inspect}")
    #return params.merge(id: id)
  end

  def delete(id)
    puts("HTTP DELETE: #{id}")
    #return {
    #  id: id,
    #  deleted: true
    #}
  end
#, + "\n #{'-'*(k.size + v.size + 4)}")
=end

  def show_post
    puts("#{'-'*10}\n")
    puts("POST Sending: ".colorize(:color => :blue, :mode => :bold) +
      "#{self.inspect}")
    puts("POST finsh".colorize(:green))
    puts("#{'-'*10}\n")
  end

  def show_all(result_select)
    result_select.each do |row|
      row.each {|k, v| puts("#{k} => #{v}")}      
      puts("#{'-'*10}\n")
    end
  end  

  def find_detail
    print("SELECT BY ID:", " #{self.class} ".colorize(:red), 
      "@id => ", "#{self.id.inspect}".colorize(:red) , 
      " , @t_column => ", "#{self.t_column.inspect}".colorize(:red)
      )
  end   
end