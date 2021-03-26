def flag_returned_value_with_stars
  puts "***************"
  yield
  puts "***************"
end

flag_returned_value_with_stars { 5.times do puts "potato" end }


def print_twice
  yield 1
  yield 2
end

list_of_names = ["Daniel","Andrew","Dasha","Nick"]

# print_twice {puts "Am I here twice ?"}
print_twice {list_of_names.each do |name| puts name end}