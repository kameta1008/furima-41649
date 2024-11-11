FactoryBot.define do
  factory :purchase_address do
    user_id { 1 }
    item_id { 1 }
    postal_code { '123-4567' }
    prefecture_id { 2 }
    city { '札幌市' }
    address { '青山1-1-1' }
    building_name { '柳ビル103' }
    phone_number { '09012345678' }
  end
end