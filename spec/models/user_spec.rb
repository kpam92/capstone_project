require 'rails_helper'

RSpec.describe User, type: :model do
  if { should validate_presence of(:username)}
end
