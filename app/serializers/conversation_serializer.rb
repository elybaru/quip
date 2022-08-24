class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :messages
  
  # attribute :users do |conversation|
  #   UserSerializer.new(conversation.users.uniq).serializable_hash
  # end
end
