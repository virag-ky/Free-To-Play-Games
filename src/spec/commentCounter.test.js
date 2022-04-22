import { describe, expect, test } from '@jest/globals';
import Comments from '../modules/getComments.js';
// Arrange
describe('Testing comment counter', () => {
  const mockCommentArr = [
    {
      id: 0,
      name: 'Virag',
      comment: 'Such a cool game.',
    },
    {
      id: 12,
      username: 'Bill',
      comment: "I can't stop playing it!",
    },
    {
      id: 19,
      username: 'Said',
      comment: 'Wow!',
    },
  ];
  // Act
  const counter = Comments.commentCounter(mockCommentArr);
  // Assert
  expect(counter).toBe(3);
});

test('should return comments number equal to = 3', () => {
  // Arrange
  const mockCommentArr = [
    'Counter-Strike Global Offensive',
    'Still at the top in 2022',
    'Best FPS game',
  ];
  // Act
  const counter = Comments.commentCounter(mockCommentArr);
  // Assert
  expect(counter).toBe(3);
});
