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
@admin5 = User.create(username: 'demurphy16', email: 'admin5@email.com', password: '123456')

puts "#{User.count} users created"

@recipe1 = Recipe.create(name: 'French Toast', time: '25 minutes', img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', user: @admin)
@recipe2 = Recipe.create(name: 'Spaghetti', time: '15 minutes', img: 'https://images.unsplash.com/photo-1590862261617-e4d4c34533eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhZ2hldHRpfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', user: @admin5)
@recipe3 = Recipe.create(name: 'Steak and Fries', time: '1 Hour', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0ZWFrfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', user: @admin5)
@recipe4 = Recipe.create(name: 'Chicken Parm', time: '45 Minutes', img: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFybWVzYW4lMjBjaGlja2VufGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', user: @admin)

puts "#{Recipe.count} recipes created"

@ingredient1 = Ingredient.create(name: 'salt', quantity: '1 tsp', recipe: @recipe2)
@ingredient2 = Ingredient.create(name: 'pepper', quantity: '1 tsp', recipe: @recipe1)
@ingredient3 = Ingredient.create(name: 'beef', quantity: '8 oz', recipe: @recipe2)

# @recipe2.ingredients.push(@ingredient1, @ingredient2)

puts "#{Ingredient.count} ingredients created"


