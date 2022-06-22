class User < ApplicationRecord
    has_many :messages
    has_many :memberships
    has_many :conversations, through: :memberships
end
