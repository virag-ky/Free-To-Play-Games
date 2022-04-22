import FetchGamesApi from '../modules/getGames.js';
// Arrange
describe('Game counter test', () => {
  const mockGameArr = [
    {
      id: 34,
    },
    {
      id: 23,
    },
  ];
  // Act
  const counter = FetchGamesApi.gamesCounter(mockGameArr);

  // Assert
  expect(counter).toBe(2);
});

test('should return empty array if there is no data ', () => {
  // Arrange
  const mockArr = [];
  // Act
  const counter = FetchGamesApi.gamesCounter(mockArr);
  // Assert
  expect(counter).toBe(0);
});
