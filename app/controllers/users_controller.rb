class UsersController < ApplicationController
    has_many :messages
    has_many :memberships
    has_many :conversations through: :memberships
end
