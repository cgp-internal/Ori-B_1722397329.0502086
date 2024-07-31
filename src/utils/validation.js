export function validateNote(note) {
  if (!note || typeof note !== 'object') {
    throw new Error('Invalid note object');
  }

  const { title, content, done } = note;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    throw new Error('Title is required and must be a non-empty string');
  }

  if (!content || typeof content !== 'string' || content.trim() === '') {
    throw new Error('Content is required and must be a non-empty string');
  }

  if (typeof done !== 'boolean') {
    throw new Error('Done must be a boolean value');
  }

  return true;
}