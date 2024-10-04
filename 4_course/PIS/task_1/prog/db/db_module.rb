module DB_module
  class << self
    attr_accessor(
      :path_db, 
      :adapter
      )

    def config
      yield(self)
    end    
  end

  
end