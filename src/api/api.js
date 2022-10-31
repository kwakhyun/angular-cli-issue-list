import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Accept = process.env.REACT_APP_ACCEPT;
  config.headers.Authorization = process.env.REACT_APP_TOKEN;
  return config;
});

export const getIssueList = async (page) => {
  const { data } = await api.get(`issues?state=open&sort=comments&direction=desc&per_page=20&page=${page}`);
  return data;
};

export const getIssueDetail = async (issueNumber) => {
  const { data } = await api.get(`/issues/${issueNumber}`);
  return data;
};
