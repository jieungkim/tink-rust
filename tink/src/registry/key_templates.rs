// Copyright 2020 The Tink-Rust Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////

//! Provides a registry of generator functions that return [`crate::proto::KeyTemplate`] objects.

use lazy_static::lazy_static;
use std::{collections::HashMap, sync::RwLock};

pub type KeyTemplateGenerator = fn() -> crate::proto::KeyTemplate;

lazy_static! {
    /// Global registry of key template generator functions, indexed by template name.
    static ref TEMPLATE_GENERATORS: RwLock<HashMap<String, KeyTemplateGenerator>> =
        RwLock::new(HashMap::new());
}

/// Register a key template generator function by name.
pub fn register_template_generator(name: &str, generator: KeyTemplateGenerator) {
    TEMPLATE_GENERATORS
        .write()
        .unwrap() // safe: lock
        .insert(name.to_string(), generator);
}

/// Find a key template generator function by name.
pub fn get_template_generator(name: &str) -> Option<KeyTemplateGenerator> {
    TEMPLATE_GENERATORS.read().unwrap().get(name).copied() // safe: lock
}

/// Return all available key template generator names.
pub fn template_names() -> Vec<String> {
    TEMPLATE_GENERATORS
        .read()
        .unwrap() // safe: lock
        .keys()
        .cloned()
        .collect()
}
