require 'sinatra'
require 'json'
require 'net/http'
require_relative 'lib/methods.rb'

data = Data_manipulation.new() #инстанцирование класса

get '/' do

  hash = data.fetch_data()
  data.insert_json(hash)
  @table = data.select_json()

  erb :data

end

get '/data' do
  content_type(:json)

  # вызов метода get_data на инстансе класса, который возврощает хеш 
  # хеш конвертирует в json формат
  
  data.get_data().to_json()

end