import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, B as empty, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as add_location, l as insert_dev, m as append_dev, C as set_data_dev, n as noop, H as HtmlTag } from './client.20685c31.js';
import { f as findPost } from './posts.355aacd8.js';

/* src/routes/blog/[permalink].svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/[permalink].svelte";

function create_fragment(ctx) {
	let h1;
	let t0_value = /*post*/ ctx[0].title + "";
	let t0;
	let t1;
	let html_tag;
	let raw_value = /*post*/ ctx[0].html + "";
	let html_anchor;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 20, 0, 495);
			html_tag = new HtmlTag(html_anchor);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			html_tag.m(raw_value, target, anchor);
			insert_dev(target, html_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && t0_value !== (t0_value = /*post*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) html_tag.p(raw_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
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

	$$self.$capture_state = () => ({ findPost, preload, post });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Blcm1hbGlua10uODkxOWE4MTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bcGVybWFsaW5rXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIC8vIGltcG9ydCB0aGUgbG9naWMgZm9yIGZpbmRpbmcgYSBwb3N0IGJhc2VkIG9uIHBlcm1hbGlua1xuICBpbXBvcnQgeyBmaW5kUG9zdCB9IGZyb20gXCIuLi8uLi9wb3N0c1wiO1xuXG4gIC8vIHNhcHBlciBjYWxscyB0aGlzIHRvIGxvYWQgb3VyIGRhdGFcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkge1xuICAgIC8vIGZpbmQgdGhlIHBvc3QgYmFzZWQgb24gdGhlIHBlcm1hbGluayBwYXJhbVxuICAgIGNvbnN0IHBvc3QgPSBmaW5kUG9zdChwYWdlLnBhcmFtcy5wZXJtYWxpbmspO1xuXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiBwcm9wc1xuICAgIHJldHVybiB7IHBvc3QgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIC8vIHRoaXMgcHJvcCBpcyBmaWxsZWQgZnJvbSB0aGUgcmVzdWx0IG9mIHRoZSBgcHJlbG9hZCgpYFxuICBleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPCEtLSBkaXNwbGF5IHRoZSBwb3N0IC0tPlxuPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbntAaHRtbCBwb3N0Lmh0bWx9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUJBb0JLLEdBQUksSUFBQyxLQUFLOzs7OzBCQUVSLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFGWCxHQUFJLElBQUMsS0FBSztpRUFFUixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FqQkUsT0FBTyxDQUFDLElBQUk7O09BRXBCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7VUFHbEMsSUFBSTs7Ozs7O09BTUosSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
