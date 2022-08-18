class Message < ApplicationRecord
    include ActiveModel::Serializers::JSON
    belongs_to :user
    belongs_to :conversation

    validates :content, presence: :true
end
