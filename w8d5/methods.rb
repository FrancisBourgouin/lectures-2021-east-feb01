# def
list_of_names = ["Joseph","Toni","Eiman","Said","Kevin"]

def check_if_found first_name, second_name, index
  if first_name == second_name
    puts "Found #{first_name} at the position #{index}!"
  end
end



list_of_names.each_with_index do |name, index|
  check_if_found name, 'Said', index
end

# putssss potato
