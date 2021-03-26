# each, each_with, while, for, select, steps


# (0..100).step(2) do |n|
# 	puts n
# end

list_of_names = ["Joseph","Toni","Eiman","Said","Kevin"]

# list_of_names.each do |name|
#   puts "Hello #{name} !"
# end

list_of_names.each_with_index do |name, index|
  if name == "Toni"
    puts "Found #{name} at the position #{index}!"
  end
end
