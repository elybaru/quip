class User < ApplicationRecord
    has_secure_password
    has_many :messages
    has_many :memberships
    has_many :conversations, through: :memberships

    validates :username, presence: true, uniqueness: true
end
