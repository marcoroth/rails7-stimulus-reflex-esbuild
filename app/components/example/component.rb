class Example::Component < ViewComponent::Base
  def initialize(message:)
    @message = message
  end
end
