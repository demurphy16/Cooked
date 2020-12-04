class IngredientsController < ApplicationController
  # GET /ingredients
  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end
  # POST /ingredients
  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient, status: :created
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end  
  private
    # Only allow a trusted parameter "white list" through.
    def ingredient_params
      params.require(:ingredient).permit(:name, :quantity, :string, :recipe_id)
    end
end