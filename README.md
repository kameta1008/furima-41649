# テーブル設計

## users テーブル

| Column             | Type    | Options                   |
| ------------------ | ------- | ------------------------- |
| nickname           | string  | null: false               |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false               |
| first_name         | string  | null: false               |
| last_name          | string  | null: false               |
| first_name_kana    | string  | null: false               |
| last_name_kana     | string  | null: false               |
| date_of_birth      | date    | null: false               |

## Associations

- has_many :items
- has_many :purchases

## items テーブル

| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| name               | string     | null: false                    |
| info               | text       | null: false                    |
| category           | genre_id   | null: false                    |
| sales_status       | genre_id   | null: false                    |
| shipping_fee       | genre_id   | null: false                    |
| prefecture         | genre_id   | null: false                    |
| scheduled_delivery | genre_id   | null: false                    |
| price              | integer    | null: false                    |
| user               | references | null: false, foreign_key: true |

## Associations

- belongs_to :user
- has_one :purchase

## purchases テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| item   | references | null: false, foreign_key: true |

## Associations

- belongs_to :user
- belongs_to :item
  has_one :shopping_address

## shopping_addresses テーブル

| Column         | Type       | Options                        |
| -------------- | ---------- | ------------------------------ |
| postal_code    | string     | null: false                    |
| prefecture     | genre_id   | null: false                    |
| city           | string     | null: false                    |
| address        | string     | null: false                    |
| building_name  | string     |                                |
| phone_number   | string     | null: false                    |
| purchase       | references | null: false, foreign_key: true |

## Associations

- belongs_to :purchase
