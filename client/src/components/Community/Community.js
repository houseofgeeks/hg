import React, { useEffect } from 'react';
import $ from 'jquery';
import './Community.css';


const Community = () =>{
    useEffect( ()  =>{
        $(document).ready(function() {

            // console.log('whichSlide: ' + whichSlide);
          
            $('.glide__bullet, .glide__slide, .glide__arrow').on('click', function(index) {
          
              var whichSlide;
          
              var activeSlide = $(this).attr('data-slide');
              if (activeSlide > 0) {
                whichSlide = ($(this).index() + 1);
          
              } else {
                whichSlide = $(".glide__slide").index($(".active"));
                if ($(this).hasClass('glide__arrow--next')) {
                  whichSlide = (whichSlide + 2);
                  if (whichSlide > $(".glide__slide").length) {
                    whichSlide = 1;
                  }
          
                }
                if (whichSlide <= 0) {
                  whichSlide = $(".glide__slide").length;
                }
          
              }
          
              $('.glide__bullet').removeClass('active');
              $('.glide__slide').removeClass('active').removeAttr('style');
              $('#slide-' + whichSlide).addClass('active');
              $('#button-' + whichSlide).addClass('active');
          
              makeSomeTiles(whichSlide);
            });
          
          
            function makeSomeTiles(whichSlide) {
              var i = (10 - whichSlide);
              $('.glide__slide').each(function(index) {
                var letDoThis;
                var indexRedux = (index + 1);
                if (indexRedux === whichSlide) {
                  $(this).css({
                    'z-index': '1000',
                    'transform': 'scale(1)'
                  });
                  i = 8;
                }
          
                if (indexRedux < whichSlide) {
                  $(this).css({
                    'z-index': (indexRedux + 1),
                    'transform': 'scale(1, ' + ((i / 10) + .08) + ')'
                  });
                  i++;
                }
          
                if (indexRedux > whichSlide) {
                  $(this).css({
                    'z-index': (10 - indexRedux),
                    'transform': 'scale(1, ' + ((i / 10) + .08) + ')'
                  });
                  i--;
                }
          
              });
          
            }
          
          
          
          });
          
    }

    );
    return(
        <div className="commMain">
            <div className="glide__main" id="wiz-glide">

<div className="glide__container" id="wiz-glide">

  <ul className="glide__slides">
    <li className="glide__slide" id="slide-1" data-slide="1">
      <div>
        <h2>Account Manager</h2>
        <p>
          Our entry-level position in Sales and Operations, the Account Manager oversees daily operations, manages relationships and grows existing accounts an assigned territory.
        </p>
      </div>
    </li>
    <li className="glide__slide" id="slide-2" data-slide="2">
      <div>
        <h2>Area Manager</h2>
        <p>
          The Area Manager maintains existing accounts and prospects for new accounts in an assigned territory, oversees daily operations and supervises Technicians.
        </p>
      </div>
    </li>
    <li className="glide__slide" id="slide-3" data-slide="3">
      <div>
        <h2>Market Manager</h2>
        <p>
         The Market Manager oversees a geographic area between $1.5 and $4 million in revenue, growing the business and supervising service delivery for auctions, new and used car dealers, car rental companies or fixed sites.
        </p>
      </div>
    </li>
    <li className="glide__slide active" id="slide-4" data-slide="4">
      <div>
        <h2>Auction Manager</h2>
        <p>
         The Auction Manager is responsible for the vehicle flow and quality for auction customers, as well as supervising technicians, building customer relationships and developing and implementing business plans.
        </p>
      </div>
    </li>
    <li className="glide__slide" id="slide-5" data-slide="5">
      <div>
        <h2>District Manager</h2>
        <p>
          Generally promoted from within, District Managers oversee a region with annual revenues of $3–6 million. Duties include operations, business development and employee management and retention.
        </p>
      </div>

    </li>
    <li className="glide__slide" id="slide-6" data-slide="6">
      <div>
        <h2>Regional Customer Development Director</h2>
        <p>
          The RCDD is responsible for increasing revenue and market penetration in the dealer and rental channel within their territory by developing and implementing business development solutions.
        </p>
      </div>
    </li>
    <li className="glide__slide" id="slide-7" data-slide="7">
      <div>
        <h2>Regional Vice President</h2>
        <p>
          The RVP oversees a team of District Managers and the Regional Business Development Manager, taking full responsibility for the growth and strategic direction of an assigned territory.
        </p>
      </div>
    </li>
  </ul>

</div>

<div className="glide__arrows" data-glide-el="controls">
  <a className="glide__arrow glide__arrow--prev" data-glide-dir="<">&#10094;</a>
  <a className="glide__arrow glide__arrow--next" data-glide-dir=">">&#10095;</a>
</div>

<div className="glide__bullets" data-glide-el="controls[nav]">
  <a className="glide__bullet" data-slide="1" id="button-1">
    <div></div>
    Account Manager
  </a>
  <a className="glide__bullet" data-slide="2" id="button-2">
    <div></div>
    Area Manager
  </a>
  <a className="glide__bullet" data-slide="3" id="button-3">
    <div></div>
   Market Manager
  </a>
  <a className="glide__bullet active" data-slide="4" id="button-4">
    <div></div>
    Auction Manager
  </a>
  <a className="glide__bullet" data-slide="5" id="button-5">
    <div></div>
   District Manager
  </a>
  <a className="glide__bullet" data-slide="6" id="button-6">
    <div></div>
    Regional Customer Development Director
  </a>
  <a className="glide__bullet" data-slide="7" id="button-7">
    <div></div>
    Regional Vice President
  </a>
</div>

</div>

        </div>
    );
}
export default Community;