class NoteTag < ApplicationRecord
    validates :note_id, :tag_id, presence: true
    validates :note_id, uniqueness: {scope: :tag_id}

    belongs_to :note,
        foreign_key: :note_id,
        class_name: :Note

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag
end
