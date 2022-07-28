class Conversation < ApplicationRecord
    has_many :memberships
    has_many :users, through: :memberships
    has_many :messages, dependent: :destroy
    has_many :users, through: :messages
    validates :room_name, presence: :true
    validates_uniqueness_of :room_name
end
