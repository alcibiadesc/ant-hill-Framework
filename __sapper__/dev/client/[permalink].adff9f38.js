import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, o as create_component, a as space, t as text, c as claim_element, b as children, p as claim_component, h as claim_space, f as claim_text, g as detach_dev, j as add_location, k as attr_dev, l as insert_dev, r as mount_component, m as append_dev, B as set_data_dev, u as transition_in, w as transition_out, x as destroy_component, H as HtmlTag } from './client.9c20d62a.js';
import { _ as _1_Title } from './1-Title.28aa415b.js';
import { f as findPost } from './posts.abe9ac5d.js';

/* src/routes/blog/[permalink].svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/[permalink].svelte";

function create_fragment(ctx) {
	let main;
	let title;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let html_tag;
	let raw_value = /*post*/ ctx[0].html + "";
	let current;
	title = new _1_Title({ $$inline: true });

	const block = {
		c: function create() {
			main = element("main");
			create_component(title.$$.fragment);
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(title.$$.fragment, main_nodes);
			t0 = claim_space(main_nodes);
			h1 = claim_element(main_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 28, 2, 612);
			html_tag = new HtmlTag(null);
			attr_dev(main, "class", "sections");
			add_location(main, file, 24, 0, 545);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			mount_component(title, main, null);
			append_dev(main, t0);
			append_dev(main, h1);
			append_dev(h1, t1);
			append_dev(main, t2);
			html_tag.m(raw_value, main);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) html_tag.p(raw_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(title);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload(page) {
	// find the post based on the permalink param
	const post = findPost(page.params.permalink);

	// return a list of props
	return { post };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bpermalinku5D", slots, []);
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bpermalinku5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ Title: _1_Title, findPost, preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bpermalinku5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpermalinku5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bpermalinku5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bpermalinku5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bpermalinku5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpermalinku5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Blcm1hbGlua10uYWRmZjlmMzguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bcGVybWFsaW5rXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCBUaXRsZSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzLzEtVGl0bGUuc3ZlbHRlXCI7XG4gIC8vIGltcG9ydCB0aGUgbG9naWMgZm9yIGZpbmRpbmcgYSBwb3N0IGJhc2VkIG9uIHBlcm1hbGlua1xuICBpbXBvcnQgeyBmaW5kUG9zdCB9IGZyb20gXCIuLi8uLi9wb3N0c1wiO1xuXG4gIC8vIHNhcHBlciBjYWxscyB0aGlzIHRvIGxvYWQgb3VyIGRhdGFcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkge1xuICAgIC8vIGZpbmQgdGhlIHBvc3QgYmFzZWQgb24gdGhlIHBlcm1hbGluayBwYXJhbVxuICAgIGNvbnN0IHBvc3QgPSBmaW5kUG9zdChwYWdlLnBhcmFtcy5wZXJtYWxpbmspO1xuXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiBwcm9wc1xuICAgIHJldHVybiB7IHBvc3QgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIC8vIHRoaXMgcHJvcCBpcyBmaWxsZWQgZnJvbSB0aGUgcmVzdWx0IG9mIHRoZSBgcHJlbG9hZCgpYFxuICBleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48bWFpbiBjbGFzcz1cInNlY3Rpb25zXCI+XG5cbiAgPFRpdGxlIC8+XG4gIDwhLS0gZGlzcGxheSB0aGUgcG9zdCAtLT5cbiAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbiAge0BodG1sIHBvc3QuaHRtbH1cblxuPC9tYWluPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkE0Qk8sR0FBSSxJQUFDLEtBQUs7Ozs7MEJBRVIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUZYLEdBQUksSUFBQyxLQUFLOytFQUVSLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBeEJBLE9BQU8sQ0FBQyxJQUFJOztPQUVwQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1VBR2xDLElBQUk7Ozs7OztPQU1KLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
