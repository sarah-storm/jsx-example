import { h } from "preact";
import DefaultLayout from "@layouts/default";
import Sarah from "@components/sarah";

export const title = "Home";

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => (
	<DefaultLayout section={"Home"} pageType="blog">
		<Sarah title="text" href="http://www.bbc.co.uk" summary="This is some summary test" buttonText="More about text" buttonType="secondary" />
		<Sarah title="text" href="http://www.bbc.co.uk" /> 
		
        {/* <div class="row">
			<div class="col xs-12">
				<div class="nav">
					<ul><li><a href="#">Page 1</a></li>
						<li><a href="#">Page 1</a></li>
						<li><a href="#">Page 1</a></li>
					</ul>
				</div>
                <h1>My page</h1>
				<div class="my-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra euismod aliquam. Donec in sem eu nunc aliquam convallis
						sed eu erat. Proin at rhoncus est, semper egestas diam. Cras dapibus auctor mattis. In convallis iaculis enim, in tristique
						nisi accumsan semper. Suspendisse pharetra augue ut blandit blandit. Integer tempus a lorem ut placerat. Donec ullamcorper ut
						augue at laoreet. Maecenas pulvinar, diam eu tristique ornare, nulla odio malesuada dolor, porta sagittis neque erat eget
						turpis. Sed tempus purus dolor, eget blandit enim lacinia id.
					</p>
					<p>
						Sed dui leo, efficitur sit amet ullamcorper bibendum, mollis vitae risus. Fusce convallis gravida nibh pharetra malesuada.
						Pellentesque laoreet vitae quam vitae congue. Cras vitae malesuada ex. Quisque bibendum sollicitudin facilisis. Nulla finibus,
						arcu eu mollis maximus, enim quam lacinia nibh, sit amet iaculis risus tortor ac ipsum. Quisque in lectus elementum, tempor
						ligula eget, condimentum ligula. Cras in tincidunt est, a aliquet justo. Phasellus fringilla non mauris sit amet vehicula.
					</p>
					<h2 style="margin-top:20px">Got a title</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra euismod aliquam. Donec in sem eu nunc aliquam convallis
						sed eu erat. Proin at rhoncus est, semper egestas diam. Cras dapibus auctor mattis. In convallis iaculis enim, in tristique
						nisi accumsan semper. Suspendisse pharetra augue ut blandit blandit. Integer tempus a lorem ut placerat. Donec ullamcorper ut
						augue at laoreet. Maecenas pulvinar, diam eu tristique ornare, nulla odio malesuada dolor, porta sagittis neque erat eget
						turpis. Sed tempus purus dolor, eget blandit enim lacinia id.
					</p>
					<p>
						Sed dui leo, efficitur sit amet ullamcorper bibendum, mollis vitae risus. Fusce convallis gravida nibh pharetra malesuada.
						Pellentesque laoreet vitae quam vitae congue. Cras vitae malesuada ex. Quisque bibendum sollicitudin facilisis. Nulla finibus,
						arcu eu mollis maximus, enim quam lacinia nibh, sit amet iaculis risus tortor ac ipsum. Quisque in lectus elementum, tempor
						ligula eget, condimentum ligula. Cras in tincidunt est, a aliquet justo. Phasellus fringilla non mauris sit amet vehicula.
					</p>
				</div>
			</div>
		</div> 

        <div class="row">
                <div class="col xs-12">
                    <h2>Related articles</h2>
                </div>
            </div>
            <div class="row">
			<div class="col xs-4">
				<div class="my-content">
					<h3>Got a title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra euismod aliquam. Donec in sem eu nunc aliquam convallis
						sed eu erat. Proin at rhoncus est, semper egestas diam. Cras dapibus auctor mattis. In convallis iaculis enim, in tristique
						nisi accumsan semper. Suspendisse pharetra augue ut blandit blandit. Integer tempus a lorem ut placerat. Donec ullamcorper ut
						augue at laoreet. Maecenas pulvinar, diam eu tristique ornare, nulla odio malesuada dolor, porta sagittis neque erat eget
						turpis. Sed tempus purus dolor, eget blandit enim lacinia id.
					</p>
					<p>
						Sed dui leo, efficitur sit amet ullamcorper bibendum, mollis vitae risus. Fusce convallis gravida nibh pharetra malesuada.
						Pellentesque laoreet vitae quam vitae congue. Cras vitae malesuada ex. Quisque bibendum sollicitudin facilisis. Nulla finibus,
						arcu eu mollis maximus, enim quam lacinia nibh, sit amet iaculis risus tortor ac ipsum. Quisque in lectus elementum, tempor
						ligula eget, condimentum ligula. Cras in tincidunt est, a aliquet justo. Phasellus fringilla non mauris sit amet vehicula.
					</p>
					
				</div>
			</div>
			<div class="col xs-4">
				<div class="my-content">
					<h3>Got a title 2</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra euismod aliquam. Donec in sem eu nunc aliquam convallis
						sed eu erat. Proin at rhoncus est, semper egestas diam. Cras dapibus auctor mattis. In convallis iaculis enim, in tristique
						nisi accumsan semper. Suspendisse pharetra augue ut blandit blandit. Integer tempus a lorem ut placerat. Donec ullamcorper ut
						augue at laoreet. Maecenas pulvinar, diam eu tristique ornare, nulla odio malesuada dolor, porta sagittis neque erat eget
						turpis. Sed tempus purus dolor, eget blandit enim lacinia id.
					</p>
					<p>
						Sed dui leo, efficitur sit amet ullamcorper bibendum, mollis vitae risus. Fusce convallis gravida nibh pharetra malesuada.
						Pellentesque laoreet vitae quam vitae congue. Cras vitae malesuada ex. Quisque bibendum sollicitudin facilisis. Nulla finibus,
						arcu eu mollis maximus, enim quam lacinia nibh, sit amet iaculis risus tortor ac ipsum. Quisque in lectus elementum, tempor
						ligula eget, condimentum ligula. Cras in tincidunt est, a aliquet justo. Phasellus fringilla non mauris sit amet vehicula.
					</p>
				</div>
			</div>
			<div class="col xs-4">
				<div class="my-content">
					<h3>Got a title 3</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra euismod aliquam. Donec in sem eu nunc aliquam convallis
						sed eu erat. Proin at rhoncus est, semper egestas diam. Cras dapibus auctor mattis. In convallis iaculis enim, in tristique
						nisi accumsan semper. Suspendisse pharetra augue ut blandit blandit. Integer tempus a lorem ut placerat. Donec ullamcorper ut
						augue at laoreet. Maecenas pulvinar, diam eu tristique ornare, nulla odio malesuada dolor, porta sagittis neque erat eget
						turpis. Sed tempus purus dolor, eget blandit enim lacinia id.
					</p>
					<p>
						Sed dui leo, efficitur sit amet ullamcorper bibendum, mollis vitae risus. Fusce convallis gravida nibh pharetra malesuada.
						Pellentesque laoreet vitae quam vitae congue. Cras vitae malesuada ex. Quisque bibendum sollicitudin facilisis. Nulla finibus,
						arcu eu mollis maximus, enim quam lacinia nibh, sit amet iaculis risus tortor ac ipsum. Quisque in lectus elementum, tempor
						ligula eget, condimentum ligula. Cras in tincidunt est, a aliquet justo. Phasellus fringilla non mauris sit amet vehicula.
					</p>
				</div>
			</div>
		</div> */}
    </DefaultLayout>
);

export default HomePage;
