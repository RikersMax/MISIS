require_relative 'module_db.rb'

path = Dir.pwd.gsub(/\/api-services*./, '/api-services/storage/db.sqlite3')

DBApp.config do |conf| 
  conf.adapter = 'sqlite3'
  conf.path_db = path
  conf.create_version_table
end