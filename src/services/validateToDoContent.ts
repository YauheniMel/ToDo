import { ValidateType } from '../types';

export default function validateToDoContent(content: string): ValidateType {
  const MAX_LENGTH = 160;

  const lengthToDoContent = content.trim().length;
  if (lengthToDoContent && lengthToDoContent <= MAX_LENGTH) return null;

  if (!lengthToDoContent) {
    return {
      message: `поле пустое`,
    };
  }

  return {
    message: `превышен лимит текста задачи на ${lengthToDoContent - MAX_LENGTH} символов`,
  };
}
