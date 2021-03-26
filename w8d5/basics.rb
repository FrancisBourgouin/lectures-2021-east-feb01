# Variables & ' vs " & #{} & puts

bob = 5

puts bob + 6

chicken = 'pock pock'
poulet = "pouet pouet"

puts "#{chicken} and #{poulet}"

list_of_names = ["Joseph","Toni","Eiman","Said","Kevin"]

p list_of_names
puts list_of_names

language_properties = {name: "Ruby", creator:"Yukihiro 'Matz' Matsumoto", popular:true}

puts language_properties
puts language_properties[:name]