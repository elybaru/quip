class NoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :user
  has_one :board
end
