require 'net/http'
require_relative 'module_db.rb'

# класса для работы с данными
class Data_manipulation
  include DB_app 

  def initialize()
    connect()
    create_table()
  end

  def get_data()

    speed = rand(1.0..100.0).round(3)  # скорость от 1 до 100
    runtime = Time.now()  # время работы в секундах
    direction = ['clockwise', 'counterclockwise'].sample  # направление вращения
    random_data = rand(1..100)  # случайные данные от 1 до 100

    data = {
      speed: speed,
      runtime: runtime,
      direction: direction,
      random_data: random_data
    }
    return(data)
  end

  def insert_json(hash)
    insert_into(hash)
  end

  def fetch_data()
    json_row = Net::HTTP.get('localhost', '/data', '4567')
    return(JSON.parse(json_row))    
  end

  def select_json()
    select_data()
  end
end

