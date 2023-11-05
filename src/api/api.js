const BASE_URL = 'https://openmind-api.vercel.app/1-1';

export async function getSubjects(id) {
  const subjectId = id ? `${id}/` : '';
  const response = await fetch(`${BASE_URL}/subjects/${subjectId}`);
  if (!response.ok) {
    throw new Error('질문 대상 조회에 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function postSubjects(formData) {
  const response = await fetch(`${BASE_URL}/subjects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('질문 대상 생성에 실패했습니다');
  }
  const body = await response.json();
  return body;
}
