import "@testing-library/jest-dom";
import { act, render, screen } from '@testing-library/react';
import Carousel from '../carousel';

jest.useFakeTimers(); 


describe('should render Carousel', () => {
  it('exibe corretamente as imagens', async () => {
    render(<Carousel />);

    const firstImage = screen.getByAltText('Image 0');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveClass('opacity-100');

    const otherImages = screen.getAllByAltText(/Image \d+/);
    otherImages.slice(1).forEach((image) => {
      expect(image).toHaveClass('opacity-0');
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await screen.findByAltText('Image 1'); // Aguarda até que a próxima imagem seja renderizada

    const nextImage = screen.getByAltText('Image 1');
    expect(nextImage).toBeInTheDocument();
    expect(nextImage).toHaveClass('opacity-100');

    expect(firstImage).toHaveClass('opacity-0');
  });
});








