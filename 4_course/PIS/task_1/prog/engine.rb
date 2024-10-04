
require_relative "models/sales/product.rb"

x = Product.new
x.build
#x.id = 1
x.t_column = 'test data stamp'
x.data_stamp = Time.new.to_i
res = x.create
puts res

#prod = x.find_by_id(5)
#prod.t_column = 'test update with show module'
#reslut = prod.update

#prod.test_
#result = x.sql_execute('select * from test_table')
#result = x.find_by_id(3)
#result = x.all
#puts result

#prod = x.build
#prod.id = 6
#prod.t_column = 'test create insert'
#print prod.inspect
#prod.create

#prod = x.find_by_id(5)

#print prod.instance_variables

#x.all

#result = x.find_by_id(5)
#print result.id

#result.t_column = 'test update with build 2'
#result.update

#puts x.find_by_id(4).inspect
#print result.instans_var


#result = x.build
#result.t_column = 'test update with build'

#result.create
#print result.inspect


#print result.instance_variables

#s = result.instans_var
#print s

#result.insert_into({'id'=> result.id, 't_column'})
#result = x.update(hash)

#puts result[1].inspect
#puts x.id

#puts result
#result.destroy
