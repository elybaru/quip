class User < ApplicationRecord
    include ActiveModel::Serializers::JSON
    has_secure_password
    has_many :messages, dependent: :destroy
    has_many :memberships
    has_many :conversations, through: :memberships

    validates :username, presence: true, uniqueness: true
end
