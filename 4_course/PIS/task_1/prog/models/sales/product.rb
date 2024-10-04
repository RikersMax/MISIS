require_relative "../base_model.rb"

class Product
  attr_reader :table
  attr_accessor :id, :t_column, :data_stamp 

  include BaseModel

  def initialize    
    @table = "test_table"
  end
end
