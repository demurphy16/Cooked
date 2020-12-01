class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :quantity
      t.string :string
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end