import React from "react";

const BlogPostView = () => {
  return (
    <div className="container mx-auto flex flex-wrap py-6">
      {/* Post Section */}

      <article className="flex flex-col shadow my-4">
        {/* Article Image */}
        <a href="#" className="hover:opacity-75">
          <img
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
          />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </a>
          <p className="text-sm pb-8">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          <h1 className="text-2xl font-bold pb-3">Introduction</h1>
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel neque non libero suscipit suscipit eu eu urna. Proin bibendum
            urna mattis ante malesuada ultrices. Etiam in turpis vitae elit
            dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus
            sem tincidunt. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. In est enim, imperdiet
            sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum
            turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut
            egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Duis quis neque non urna venenatis
            mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit
            molestie, mollis vel elit.
          </p>
          <h1 className="text-2xl font-bold pb-3">Heading</h1>
          <p className="pb-3">
            Vivamus nec facilisis elit, quis congue justo. In non augue ex.
            Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam
            faucibus a diam sed vehicula. Nullam commodo lacus tincidunt,
            tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a
            ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus
            viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur
            volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque
            turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam
            id leo efficitur malesuada eget in velit. Pellentesque tristique
            orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo
            sed ipsum egestas varius.
          </p>
          <p className="pb-3">
            Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a
            rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut
            dictum lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus
            quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor
            felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque
            mauris elementum nec. Cras ante metus, mattis in malesuada in,
            fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo
            dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna
            porttitor ex, sed consequat nisi tellus eget ante. Duis molestie
            mollis eros, eu sollicitudin mauris lobortis quis.
          </p>
          <p className="pb-3">
            Vivamus sed neque nec massa scelerisque imperdiet eget id sapien.
            Fusce elementum mi id malesuada luctus. Proin quis lorem id leo
            porta interdum non ac nisl. Integer nulla sem, ultrices sed neque
            eget, blandit condimentum metus. Aliquam eget malesuada sapien.
            Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna
            mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Nam facilisis sem diam, viverra consequat metus consequat
            vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat
            volutpat.
          </p>
          <h1 className="text-2xl font-bold pb-3">Conclusion</h1>
          <p className="pb-3">
            Donec vulputate auctor leo lobortis congue. Sed elementum pharetra
            turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget
            porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit
            ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet
            iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a
            eros aliquet, egestas tortor hendrerit, posuere diam. Proin laoreet,
            ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim
            convallis quam dolor et nulla.
          </p>
        </div>
      </article>

      <div className="w-full flex pt-6">
        <a
          href="#"
          className="w-1/2 bg-white shadow hover:shadow-md text-left p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center">
            <i className="fas fa-arrow-left pr-1" /> Previous
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
        <a
          href="#"
          className="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
            Next <i className="fas fa-arrow-right pl-1" />
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </div>

      <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
        <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
          <img
            src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
            className="rounded-full shadow h-32 w-32"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <p className="font-semibold text-2xl">David</p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel neque non libero suscipit suscipit eu eu urna.
          </p>
          <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
            <a className="" href="#">
              <i className="fab fa-facebook" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-instagram" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
