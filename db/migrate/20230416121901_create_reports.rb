class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :tps, null: false
      t.string :comment, null: false
      t.string :screenshot, null: true

      t.timestamps
    end
  end
end
