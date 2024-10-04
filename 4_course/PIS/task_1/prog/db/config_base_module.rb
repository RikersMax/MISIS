require_relative "./db_module.rb"

DB_module.config do |conf|
  conf.adapter = 'sqlite3'
  conf.path_db = "/home/max-lar/Рабочий стол/misis/4 курс/PIS/task_1/prog/db/db_dev.sqlite3"
end
