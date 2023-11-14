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

export async function getSubjectsQuestion(id, limit = 2, offset = '') {
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
  return body;
}

export async function deleteSubjects(id) {
  const response = await fetch(`${BASE_URL}/subjects/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('계정 삭제 중 문제가 발생했습니다.');
  }
  return response.ok;
}

export async function deleteQuestion(id) {
  const response = await fetch(`${BASE_URL}/questions/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('질문 삭제에 실패하였습니다');
  }
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
  return body;
}

export async function deleteAnswer(id) {
  const response = await fetch(`${BASE_URL}/answers/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('답변 삭제에 실패하였습니다');
  }
}

export async function postReactionOnQuestion(id, formData) {
  const response = await fetch(`${BASE_URL}/questions/${id}/reaction/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('질문 리액션에 실패하였습니다');
  }
  const body = await response.json();
  return body;
}
