
class Car
  def initialize sound, make, color
    @sound = sound
    @make = make
    @color = color
  end

  # attr_reader :make, :sound, :color
  # attr_writer :make

  attr_accessor :make, :sound, :color

  def start_car
    puts "Starting the car"
    puts "It is making a #{@sound} sound"
  end
end


sad_car = Car.new "pitiful", "we don't care", "some kind of weird beige"
cool_car = Car.new "deep & awesome", "Camaro SS 67", "Black"

sad_car.start_car

cool_car.start_car
# puts sad_car.make

# sad_car.make = "We do care actually, but I forgot, so do we really care"

# puts sad_car.make