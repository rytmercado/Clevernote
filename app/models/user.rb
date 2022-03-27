class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

    attr_reader :password

    after_initialize :ensure_session_token
    after_create :create_notebook

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def create_notebook
        notebook = Notebook.new({subject: 'my first notebook', user_id: self.id})
        notebook.save
    end

    has_many :notes,
        foreign_key: :user_id,
        class_name: :Note

    has_many :notebooks,
        foreign_key: :user_id,
        class_name: :Notebook

    has_many :tags,
        foreign_key: :user_id,
        class_name: :Tag
end
