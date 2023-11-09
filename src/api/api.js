const BASE_URL = 'https://openmind-api.vercel.app/1-1';

export async function getSubjects(id, limit = 8, offset = '', sort = 'time') {
  const subjectId = id ? `${id}/` : '';
  const query = id ? '' : `?limit=${limit}&offset=${offset}&sort=${sort}`;
  const response = await fetch(`${BASE_URL}/subjects/${subjectId}${query}`);
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

export async function getSubjectsQuestion(id, limit = 5, offset = '') {
  const subjectId = id;
  const query = `?limit=${limit}&offset=${offset}`;
  const response = await fetch(
    `${BASE_URL}/subjects/${subjectId}/questions/${query}`
  );
  if (!response.ok) {
    throw new Error('질문 조회에 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function postSubjectsQuestion(id, formData) {
  const response = await fetch(`${BASE_URL}/subjects/${id}/questions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('질문 생성에 실패하였습니다');
  }
  const body = await response.json();
  console.log(body);
  return body;
}

export async function postAnswer(id, formData) {
  const response = await fetch(`${BASE_URL}/questions/${id}/answers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('답변 생성에 실패하였습니다');
  }
  const body = await response.json();
  console.log(body);
  return body;
}

export async function putAnswer(id, formData) {
  const response = await fetch(`${BASE_URL}/answers/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('답변 수정에 실패하였습니다');
  }
  const body = await response.json();
  console.log(body);
  return body;
}
