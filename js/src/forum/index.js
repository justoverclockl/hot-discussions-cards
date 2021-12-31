import app from 'flarum/forum/app';
import AddCardsToHero from './components/AddCardsToHero';
import { override } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('justoverclock/hot-discussion-cards', () => {
  override(IndexPage.prototype, 'hero', function (original) {
    return (
      <>
        {original()}
        <AddCardsToHero />
      </>
    );
  });
});
