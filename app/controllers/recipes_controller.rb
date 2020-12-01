class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy, :add_ingredient]
  before_action :authorize_request, only: [:my_recipes, :create, :update, :destroy]
  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe, include: :ingredients
  end

  # Get all Recipes for Specific User
  def my_recipes
    @my_recipes = @current_user.recipes

    render json: @my_recipes
  end

  # POST /recipes
  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user = @current_user
    
    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  def add_ingredient
    @ingredient = Ingredient.find(params[:ingredient_id])
    @recipe.ingredients.push(@ingredient)

    render json: @recipe, include: :ingredients
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:name, :time, :img, :user_id)
    end
end
