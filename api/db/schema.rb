# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_06_002028) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apartments", force: :cascade do |t|
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.string "best_trans_method"
    t.integer "total_cost"
    t.string "indoor_features", default: [], array: true
    t.string "nearby_features", default: [], array: true
    t.bigint "habitants_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["habitants_id"], name: "index_apartments_on_habitants_id"
  end

  create_table "habitants", force: :cascade do |t|
    t.string "preferred_transportation"
    t.float "satisfaction"
    t.integer "num_roomates"
    t.string "reasons", default: [], array: true
    t.string "bad_experiences", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
