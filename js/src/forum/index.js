import app from 'flarum/forum/app';
import AddCardsToHero from './components/AddCardsToHero';
import { extend,override } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';

app.initializers.add('justoverclock/hot-discussion-cards', () => {
  extend(WelcomeHero.prototype, 'oninit', function () {
    if (!app.forum.attribute('welcomeTitle')?.trim()) this.hidden = true;
  })
  override(IndexPage.prototype, 'hero', function (original) {
    return (
      <>
        {original()}
        <AddCardsToHero />
      </>
    );
  });
});
