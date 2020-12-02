# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Ingredient.destroy_all
Recipe.destroy_all
User.destroy_all


@admin = User.create(username: 'admin', email: 'admin@gmail.com', password: '123456')
@admin5 = User.create(username: 'admin5', email: 'admin5@email.com', password: '123456')

puts "#{User.count} users created"

@recipe1 = Recipe.create(name: 'recipe1', time: '15 minutes', img: 'recipe1.com', user: @admin)
@recipe2 = Recipe.create(name: 'pasta', time: '6 minutes', img: 'recipe2.com', user: @admin5)
puts "#{Recipe.count} recipes created"

@ingredient1 = Ingredient.create(name: 'salt', quantity: '1 oz', recipe: @recipe1)
@ingredient2 = Ingredient.create(name: 'pepper', quantity: '2 oz', recipe: @recipe1)
@ingredient2 = Ingredient.create(name: 'chicken', quantity: '3 oz', recipe: @recipe1)

puts "#{Ingredient.count} ingredients created"
