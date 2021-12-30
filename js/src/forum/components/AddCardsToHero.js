import app from 'flarum/forum/app'
import Component from 'flarum/common/Component';

export default class AddCardsToHero extends Component {

  oninit(vnode) {
    super.oninit(vnode);
    this.discPreview = [];
    this.loading = true;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    const limitHotDisc = 3;
    // get discussions object
    app.store
      .find('discussions', {
        sort: '-commentCount',
        page: { limit: limitHotDisc },
        include: 'firstPost'
      })
      .then((results) => {
        this.discPreview = results;
        this.loading = false;
        m.redraw();
      });
  }

  view() {
    return (
      <div className="cardContainer">
        <section className="cards-wrapper">
          {this.discPreview && this.discPreview.map((prevDisc) => {
            {console.log(prevDisc)}
            return (
              <div className="card-grid-space">
                <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/"
                   style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                  <div>
                    <h5>{prevDisc.title()}</h5>
                    <p>{prevDisc.firstPost()}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
