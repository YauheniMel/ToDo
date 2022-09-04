import { useEffect, useState } from 'react';
import validateToDoContent from '../services/validateToDoContent';
import { ValidateType } from '../types';

export default function useValidate(content: string): ValidateType {
  const [validate, setValidate] = useState<ValidateType>(null);

  useEffect(() => {
    setValidate(validateToDoContent(content));
  }, [content]);

  return validate;
}
